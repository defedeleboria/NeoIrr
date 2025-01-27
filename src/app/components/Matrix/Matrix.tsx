import LightCard from "../LightCard/Lightcard";

interface MatrixProps {
    text: number[];
    selectedPosition: number | null;
    onCardSelect: (position: number) => void;
}

export default function Matrix(props: MatrixProps) {
    const { text, selectedPosition, onCardSelect } = props;

    const getLightStyle = (text: number, range: [number, number], lightGrayValues: number[]) => {
        const parsedText = text;
        if (parsedText >= range[0] && parsedText <= range[1]) {
            return { color: "black" };
        } else if (lightGrayValues.includes(parsedText)) {
            return { color: "lightgray" };
        } else {
            return { color: "red" };
        }
    };

    const getLightStyle24 = (text: number) => getLightStyle(text, [24, 50], [0, 2, 20, 22]);
    const getLightStyle38 = (text: number) => getLightStyle(text, [28, 59], [1, 21]);
    const getLightStyle40 = (text: number) => getLightStyle(text, [40, 63], [11]);
    const getLightStyle27 = (text: number) => getLightStyle(text, [27, 56], [10, 12]);

    const lightData = [
        { reference: "REF:24 - 50 [uW/cm2/nm]" },
        { reference: "REF:38 - 59 [uW/cm2/nm]" },
        { reference: "REF:24 - 50 [uW/cm2/nm]" },
        { reference: "REF:27 - 56 [uW/cm2/nm]" },
        { reference: "REF:40 - 63 [uW/cm2/nm]" },
        { reference: "REF:27 - 56 [uW/cm2/nm]" },
        { reference: "REF:24 - 50 [uW/cm2/nm]" },
        { reference: "REF:38 - 59 [uW/cm2/nm]" },
        { reference: "REF:24 - 50 [uW/cm2/nm]" }
      ];
    
      return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-10 mb-10">
          <div className="grid grid-cols-3 gap-4">
          {text.map((value, index) => {
                    const style = (() => {
                        switch (index) {
                            case 0:
                                return getLightStyle24(value);
                            case 1:
                                return getLightStyle38(value);
                            case 2: 
                                return getLightStyle24(value);
                            case 3:
                                return getLightStyle27(value);
                            case 4:
                                return getLightStyle40(value);
                            case 5:
                                return getLightStyle27(value);
                            case 6:
                                return getLightStyle24(value);
                            case 7: 
                                return getLightStyle38(value);
                            case 8:
                                return getLightStyle24(value);
                            default:
                                return {};
                        }
                    })();

                    const isSelected = index === selectedPosition;
                    const borderColor = isSelected ? "border-blue-500" : "border-transparent";

                    return (
                        <LightCard
                            borderSelected={{border: `4px solid ${borderColor}`}} 
                            key={index}
                            style={{ ...style }}
                            value={value}
                            reference={lightData[index].reference}
                            onClick={() => onCardSelect(index)}
                        />
                    );
                })}
          </div>
        </div>
      );
}
