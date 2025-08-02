import { ofType } from "redux-observable";
import { switchMap, of, timer } from "rxjs";

const epic0 = (action$: any) =>
  action$.pipe(
    ofType("demo1/sync-add"),
    switchMap(() =>
      timer(1000).pipe(switchMap(() => of({ type: "demo1/sync-add/success" })))
    )
  );

export default [epic0];
