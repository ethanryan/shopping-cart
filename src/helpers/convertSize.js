export default function convertSize(size) {
  if (size === "small") {
    return "S"
  }
  if (size === "medium") {
    return "M"
  }
  if (size === "large") {
    return "L"
  }
  if (size === "extra-large") {
    return "XL"
  }
}
