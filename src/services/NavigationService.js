import {
  NavigationActions,
  DrawerActions,
  StackActions,
} from 'react-navigation';

let navigator;

/**
 * @function setTopLevelNavigator
 * @param  {ref} navigatorRef referencia da instancia de navegacao
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

/**
 * @function navigate
 * @param  {string} routeName Nome da rota para onde nevegar
 * @param  {any} params    {description}
 */
function navigate(routeName, params) {
  console.tron.log('navigate', routeName, params);
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

/**
 * @function goBack  - retorna uma rota
 * @param {}
 */
function goBack() {
  navigator.dispatch(NavigationActions.back());
}

/**
 * Navega para uma rota especifica E reseta o navigation history
 * Isso sifnifica que o usuario nao pode retornar (goBack)
 *
 * @function navigateAndReset
 * @param routeName Nome da rota para onde nevegar
 * @param params Parametros da rota
 */
function navigateAndReset(routeName, params) {
  console.tron.log('navigateAndReset', routeName, params);
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

/**
 * @function openDrawer
 */
function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}
/**
 * @function closeDrawer
 */
function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer());
}
/**
 * @function toggleDrawer
 */
function toggleDrawer() {
  navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
  navigate,
  openDrawer,
  closeDrawer,
  toggleDrawer,
  goBack,
  navigateAndReset,
  setTopLevelNavigator,
};
