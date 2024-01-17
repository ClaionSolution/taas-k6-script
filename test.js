import { check } from "k6";
import http from "k6/http";

export default function () {
  const res = http.get(__ENV.BASE_URL);

  check(res, { "check status is 200": (r) => r.status == 200 });
}
