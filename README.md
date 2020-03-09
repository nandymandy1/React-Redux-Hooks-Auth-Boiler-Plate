# RECT REDUX HOOKS AUTHENTICATION WITH JWT

[![N|Solid](https://yt3.ggpht.com/a-/AAuE7mC1BzWvObIsQi2_dy8W-iIKDt0YhKAZKnRo7w=s100-mo-c-c0xffffffff-rj-k-no)](https://www.youtube.com/channel/UC7fpWskUFi90sANs9QXRVsg)

It is Simple REACT-REDUX-AUTHENTICATION-APP with boiler plate which works with the REST-JWT-TOKEN based Authentication.

Packages Used

- Bootstrap
- Sweetalert2
- Jquery
- Axios
- React Router Dom
- React Redux
- Redux Thunk
- Redux Logger
- Redux Devtools Extension
- Node Sass

Steps to USE.

```sh
  $ git clone https://github.com/nandymandy1/React-Redux-Hooks-Auth-Boiler-Plate.git && cd React-Redux-Hooks-Auth-Boiler-Plate
  $ npm i
```

# Folder Structure

```
src
└─── store
│   │
│   └───Reducers
|   │   │   index.js
│   └───Auth
│       │   Action.js (Change the "Registeration, Login, Get User and Logout(if any)" here)
│       │   Reducer.js (Change the User structure of model in the state here)
│       │   Types.js
|   App.jsx (Add the PrivateRoutes Components here under the PrivateRoute)
└─── services
        |   api.js (Chnage the the base URL Axios instane here)
```

### Using the axios configuration in other Actions and Reducers

```
src
└─── store
    └─── Reducers
    │   | index.js
    └─── Other
        | OtherAction.js
```

    - In OtherAction.js file import tokenConfig from Auth/Action.js

```js
...
import ax from "../../services/api";
import { tokenConfig } from '../Auth/Action.js'
...

// Then pass that tokenConfig into the axios headers of all the requests wherever its required
export const getLeads = () => async (dispatch, getState) => {
  dispatch(setLoading("get"));
  try {
    let { data } = await ax.get("/api/other-model/", await tokenConfig(getState));
    dispatch({
      payload: data,
      type: GET_OTHER_MODEL
    });
  } catch (err) {
    dispatch(setLoading("get"));
  }
};
```
