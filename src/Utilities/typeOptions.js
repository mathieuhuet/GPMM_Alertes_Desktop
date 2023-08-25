export const typeOptions = {
  routine: '✅ Routine',
  general: '👨‍🔧 Général (autres)',
  intervention: '🚧 Intervention',
}

export const getTypeOptions = (color) => {
  switch (color) {
    case 'routine' : {
      return '✅ Routine'
    }
    case 'general' : {
      return '👨‍🔧 Général (autres)'
    }
    case 'intervention' : {
      return '🚧 Intervention'
    }
    default : {
      throw Error("unknown activity type");
    }
  }
}