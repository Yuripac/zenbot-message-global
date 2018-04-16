function showOutput(requestedOrder, orderNumber, orderShipped, orderTrackingUrl) {
  return !requestedOrder && orderNumber != null && orderShipped && orderTrackingUrl != null
}