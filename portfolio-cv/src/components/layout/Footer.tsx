import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { translations } = useLocale();

  return (
    <footer className="w-full h-20 flex items-center justify-center bg-gray-900 text-white text-sm">
      <div className="text-center">
        <p>&copy; 2025 | {translations.footer.developedBy} Javier Moreno Picón</p>
        <p className="text-gray-400">{translations.footer.rightsReserved}</p>
      </div>
    </footer>
  );
}
