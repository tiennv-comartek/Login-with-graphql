const { override, addLessLoader } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(
  addReactRefresh(),
  alias({
    ...configPaths('tsconfig.paths.json'),
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: {
        '@menu-item-color': '#B1B5C3',
        '@menu-item-active-bg': '#F80000',
        '@menu-highlight-color': '#F8F8F8',
        '@layout-sider-background-light': '#2C3A57',
        '@menu-item-active-border-width': '0px',
        '@primary-color': '#F80000', // primary color for all components
        '@link-color': '#02192d', // link color
        '@success-color': '#52c41a', // success state color
        '@warning-color': '#faad14', // warning state color
        '@error-color': '#f5222d', // error state color
        '@font-size-base': '14px', // major text font size
        '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
        '@text-color': '#23262F', // major text color
        '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
        '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
        '@border-color-base': '#CFCFCF',
        '@box-shadow-base':
          '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        '@height-base': '38px',
        '@input-bg': '#FFFFFF',
        '@input-border-color': '#E6E8EC',
        '@border-radius-base': '4px',
        '@table-selected-row-bg': '#ffffff',
        '@btn-height-lg': '48px',
        '@btn-font-weight': '500',
        '@btn-height-base': '48px',
        '@radio-size': '20px',
        '@radio-dot-color': '#2C3A57',
        '@checkbox-size': '20px',
        '@checkbox-color': '#2C3A57',
        '@btn-default-border': '#2C3A57',
        '@pagination-item-bg-active': '#2C3A57',
      },
      javascriptEnabled: true,
    },
  }),
);
