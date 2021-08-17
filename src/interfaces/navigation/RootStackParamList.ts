type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Login: undefined;
  Register: undefined;
  TabNavigator: undefined;
  CreateShoppingList: undefined;
  ShoppingList: { id: string };
  EditListProduct: { id: string; shoppingListId: string };
};

export default RootStackParamList;