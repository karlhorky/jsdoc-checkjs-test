import React, { useState } from 'react';

/** @typedef {import('./types').User} User */

export function BrokenComponent() {
  /** @type [User, React.Dispatch<User>] */
  const [user, setUser] = useState(null);
  setUser({name: 'karl'});
}

export function CorrectComponent() {
  const [user, setUser] = useState(/** @type {User | null} */ (null));
  setUser({name: 'karl'});
}
