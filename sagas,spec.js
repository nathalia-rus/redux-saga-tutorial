import test from "tape";

import { incrementAsync } from "./sagas";

test("incrementAsync Saga test", (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next(),
    { done: false, value: undefined },
    "incrementAsync should return a Promise that will resolve after 1 second"
  );
});
