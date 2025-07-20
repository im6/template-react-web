import { ofType } from "redux-observable";
import { tap, EMPTY, switchMap } from "rxjs";
import { toggleDarkModeCookie } from "../../util/cookie";

const epic0 = (action$: any) =>
  action$.pipe(
    ofType("ui/toggle"),
    tap(() => {
      toggleDarkModeCookie();
    }),
    switchMap(() => EMPTY)
  );

export default [epic0];
