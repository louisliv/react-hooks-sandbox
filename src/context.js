import { createContext } from "react"

export const PART_ACTIONS = {
    ADD_PART: 'add-part',
    DELETE_PART: 'delete-part',
    INCREMENT_INVENTORY: 'increment-inventory',
    SET_INVENTORY: 'set-inventory'
}

export function partReducer(parts, action) {
    switch (action.type) {
      case PART_ACTIONS.ADD_PART:
        return [...parts, action.payload]
      case PART_ACTIONS.INCREMENT_INVENTORY:
        return parts.map(part => {
          if (part.id === action.payload.id) {
            return {...part, inventory: part.inventory + action.payload.increment}
          }
  
          return part;
        })
      case PART_ACTIONS.SET_INVENTORY:
        return parts.map(part => {
          if (part.id === action.payload.id) {
            return {...part, inventory: action.payload.inventory}
          }
  
          return part;
        })
      case PART_ACTIONS.DELETE_PART:
        return parts.filter(part => part.id !== action.payload.id)
      default:
        return parts
    }
}

export const PartsContext = createContext(null);