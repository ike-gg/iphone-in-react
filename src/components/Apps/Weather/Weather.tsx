import AppLayout from "@/components/Interface/AppView/AppLayout";
import Card from "@/components/Interface/Components/Card";
import Switch from "@/components/Interface/Components/Switch";
import Title from "@/components/Interface/Components/Title";
import Tooltip from "@/components/Interface/Components/Tooltip";

const Weather = () => {
  const localizations = [
    { city: "Krakow", value: 5 },
    { city: "Warszawa", value: 3 },
    { city: "Piaseczno", value: 24 },
    { city: "Pelikanow", value: 56 },
    { city: "Gdansk", value: 7 },
  ];

  return (
    <AppLayout>
      <Title>Weather</Title>
      <Card>
        {localizations.map((city) => {
          return (
            <div key={city.city} className="flex justify-between">
              <p>{city.city}</p>
              <p>{city.value}°</p>
            </div>
          );
        })}
      </Card>
      <Tooltip>Get notifications if your saved locations got updated</Tooltip>
      <Card>
        <div className="flex justify-between items-center">
          <p>Receive notifications</p>
          <Switch isActive={false} />
        </div>
      </Card>
    </AppLayout>
  );
};

export default Weather;
