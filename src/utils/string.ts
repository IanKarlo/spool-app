export function formatToBrazilianDate(isoString: string): string {
  const date = new Date(isoString);
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(date);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${formattedDate} às ${hours}h${minutes}`;
}

export function mapRoleToPortuguese(role: string): string {
  switch (role) {
    case 'Child':
      return 'Responsável';
    case 'Educationist':
      return 'Educador';
    case 'Therapist':
      return 'Terapeuta';
    default:
      return role;
  }
}