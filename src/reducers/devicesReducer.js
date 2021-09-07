const initialState = () => ({
  devices: [],
  fil_devices: [],
  filter_by: "ALL",
});

const addDevice = (state, { device }) => ({
  ...state,
  devices: state.devices.concat(device)
});

const getDevices = (state, { devices }) => ({
  ...state,
  devices
});

const getDevice = (state, { device }) => ({
  ...state,
  devicetoedit: device
});

const removeDevice = (state, { device }) => ({
  ...state,
  devices: state.devices.filter(({ id }) => id !== device.id)
});

const updateDevices = (state, { device }) => (
  { ...state })

const sortBy = (state, { devices }) => ({
  ...state,
  devices: [].concat(devices)
});

const filterType = (state, { value }) => ({
  ...state,
  filter_by: value
});

function devicesReducer(state = initialState(), action) {
  switch (action.type) {
    case "ADD_DEVICE":
      return addDevice(state, action)
    case "REMOVE_DEVICE":
      return removeDevice(state, action)
    case "GET_DEVICES":
      return getDevices(state, action)
    case "GET_DEVICE":
      return getDevice(state, action)
    case "UPDATE_DEVICES":
      return updateDevices(state, action)
    case "FILTER_TYPE":
      return filterType(state, action)
    case "SORT_BY":
      return sortBy(state, action)
    default:
      return state;
  }
};
export default devicesReducer;