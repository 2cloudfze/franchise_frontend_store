export default function replaceAndSpace(str) {
  return str
    .replace(/&/g, "%26")
    .replace(/ /g, "_")
    .replace(/\//g, "%2f")
    .replace(/All-Brands/g, "*");
}
