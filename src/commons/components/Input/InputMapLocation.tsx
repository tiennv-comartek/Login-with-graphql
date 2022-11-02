import ic_location from '@assets/icon/location1.svg';
import ModalMapView, { LocationInput } from '@commons/components/modals/ModalMapView';
import React, { useEffect, useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useTranslation } from 'react-i18next';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
interface Props {
  value?: any;
  onChange?: (data: any) => void;
  placeholder?: string;
  disableViewOnMap?: boolean;
}

const InputMapLocation = (props: Props) => {
  // const { t } = useTranslation(['translation']);
  const { t: buttonTran } = useTranslation(['button']);
  const [location, setLocation] = useState<LocationInput>();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const { ref } = usePlacesWidget<any>({
    apiKey: GOOGLE_MAP_API_KEY,
    language: 'nor',
    options: {
      // @ts-ignore
      // string[] not working, work fine with string only
      types: 'country',
    },
    onPlaceSelected: async (place: any) => {
      const address: LocationInput = {
        name: place.formatted_address,

        lat: place.geometry?.location.lat(),
        lng: place.geometry?.location.lng(),
      };
      setLocation(address);
      onChangeValues(address);
    },
  });

  const onChangeValues = (address: LocationInput) => {
    // tslint:disable-next-line: no-unused-expression
    props.onChange &&
      props.onChange({
        address: address.name,
        coordinates: {
          lat: address.lat,
          lng: address.lng,
        },
      });
  };

  useEffect(() => {
    if (props.value) {
      const address: LocationInput = {
        name: props.value.address,

        lat: props.value.coordinates.lat,
        lng: props.value.coordinates.lng,
      };
      setLocation(address);
    }
  }, [props.value]);

  const onCancel = () => {
    setVisibleModal(false);
  };

  return (
    <div className="input-address-map">
      <input
        className="ant-input"
        ref={ref}
        defaultValue={location?.name || ''}
        onChange={(e) => {
          e.persist();
          setLocation((state) => {
            return { ...state, name: e.target?.value, lat: undefined, lng: undefined };
          });
        }}
        placeholder={props.placeholder ? props.placeholder : 'Enter Address'}
        autoComplete="new-password"
        spellCheck="false"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            return false;
          }
        }}
      />
      {!props?.disableViewOnMap && (
        <div
          className="view_map"
          onClick={() => {
            if (location && location.lat && location.lng) {
              setVisibleModal(true);
            }
          }}
        >
          <img src={ic_location} alt="location" width={16} height={16} />
          <p>{buttonTran('btn.view-on-map')}</p>
        </div>
      )}
      <ModalMapView data={location} visible={visibleModal} onCancel={onCancel} />
    </div>
  );
};

export default InputMapLocation;
