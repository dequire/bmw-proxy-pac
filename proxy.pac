function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.bmwgroup.net") ||
    shExpMatch(host, "*.muc") ||
    shExpMatch(host, "*.cloud.bmw") ||
    shExpMatch(host, "*.es.amazonaws.com")) {
    return "SOCKS5 localhost:8888; SOCKS localhost:8888";
  }

  return "DIRECT";
}