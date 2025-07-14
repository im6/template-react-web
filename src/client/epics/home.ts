import { ofType } from "redux-observable";
import { switchMap, of, timer } from "rxjs";

const epic0 = (action$: any) =>
  action$.pipe(
    ofType("home/sync-add"),
    switchMap(() =>
      timer(1000).pipe(switchMap(() => of({ type: "home/sync-add/success" })))
    )
  );

export default [epic0];
