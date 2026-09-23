export const OWNER_PHONE = '8905641356';
export const OWNER_PHONE_INTL = '918905641356';
export const OWNER_PHONE_DISPLAY = '+91 89056 41356';
export const BUILDER_NAME = 'Saksham Builder and colonizer';
export const EXACT_MAP_ADDRESS = 'Saksham Builder and colonizer, Rajendra path, Niwaru Rd, Jhotwara, Jaipur, Rajasthan 302012';
export const PROPERTY_ADDRESS = 'Saksham Builder and colonizer, Rajendra path, Niwaru Rd, Jhotwara, Jaipur, Rajasthan 302012 (Plot NO. 184, 185, 186, 187, 21 South Colony)';
export const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6';
export const GOOGLE_MAPS_EMBED_URL = 'https://maps.google.com/maps?q=Saksham+Builder+and+colonizer,+Rajendra+path,+Niwaru+Rd,+Jhotwara,+Jaipur,+Rajasthan+302012&t=&z=16&ie=UTF8&iwloc=&output=embed';

export function createWhatsAppUrl(message: string, phone: string = OWNER_PHONE_INTL): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function openWhatsApp(message: string, phone: string = OWNER_PHONE_INTL) {
  const url = createWhatsAppUrl(message, phone);
  window.open(url, '_blank', 'noopener,noreferrer');
}
