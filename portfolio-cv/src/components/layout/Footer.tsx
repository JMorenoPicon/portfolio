import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { translations } = useLocale();

  return (
    <footer className="w-full py-4 bg-gray-900 text-white text-sm text-center">
      <p>&copy; 2025 | {translations.footer.developedBy} Javier Moreno Picón</p>
      <p className="text-gray-400">{translations.footer.rightsReserved}</p>
    </footer>
  );
}
