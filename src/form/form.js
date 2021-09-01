export function createControl(config) {
  return {
    ...config,
    value: "",
  };
}

export function submitHandler(event) {
  event.preventDefault();
}
