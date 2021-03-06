import axios from "axios";
import { foodsIndex } from '../urls/index'

// restaurantIdという変数名で受け取る
export const fetchFoods = async (restaurantId) => {
  // foodsIndex(restaurantId)はURL文字列を返す
  return await axios.get(foodsIndex(restaurantId))
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}