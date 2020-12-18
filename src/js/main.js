// skrypt do obslugi inputa od kodu pocztowego
import zipCodeInput from "./zipCodeInput.js";
zipCodeInput();
// skrypt do obslugi inputa od numeru telefonu
import phoneNumberInput from "./phoneNumberInput.js";
phoneNumberInput();
// skrypt do ewentualnej walidacji lub ogolnie
// zarzadzania stanem formularzu przed wyslaniem
import submitForm from "./submitForm.js";
submitForm();
// zczytanie wszystkich cen z elementow o podanej klasie
// a nastepnie ustawienie textu opdowieniego elemenut na obliczona wartossc
import sumPriceOnHighlight from "./sumPriceOnHighlight.js";
sumPriceOnHighlight("price-part");
