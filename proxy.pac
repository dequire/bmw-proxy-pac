function FindProxyForURL(url, host) {
  if (shExpMatch(host, "atc-github.azure.cloud.bmw")) {
    return "SOCKS5 localhost:8888; SOCKS localhost:8888";
  }

  return "DIRECT";
}