import { AutoGasSetting, type NetworkEvent } from "@projectsophon/types";

/**
 * Returns whether or not the given event is an instance of {@link NetworkEvent}. Not super
 * stringent but works for now.
 */
export function isNetworkEvent(event: any): event is NetworkEvent {
  return (
    typeof event.tx_to === "string" &&
    typeof event.tx_type === "string" &&
    typeof event.time_exec_called === "number" &&
    (event.autoGasPriceSetting === undefined || Object.values(AutoGasSetting).includes(event.autoGasPriceSetting))
  );
}
