interface FoodMenu {
  menu_id: string;
  menu_name: string;
  restaurant_id: string;
  price: string;
  glucose_levels: string;
}

interface FoodMenus {
  description: string;
  grabRide: null;
  menus: FoodMenu[];
  success: boolean;
  transit: null;
  type: string;
}

interface Step {
  type: string;
  distance: string;
  duration: string;
  price: string;
}

interface Transit {
  total_disctance: string;
  total_duration: string;
  steps: Step[];
}

interface TransportMenu {
  total_disctance: string;
  total_duration: string;
  price: string;
  type: string;
}

interface TransportMenus {
  description: string;
  grabRide: TransportMenu[];
  success: boolean;
  transit: Transit;
  type: string;
}
