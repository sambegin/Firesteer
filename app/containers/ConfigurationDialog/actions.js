export const SAVE_FIREBASE_CONFIG = 'saveFirebaseConfig';

export function saveConfig(config) {
  return {
    type: SAVE_FIREBASE_CONFIG,
    config
  };
}
