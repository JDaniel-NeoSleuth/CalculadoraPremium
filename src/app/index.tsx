import "../../global.css"
import {Button, Text, View} from "react-native"; /* Importa COMPONENTES utilizados neste arquivo */
import {useState} from "react"; /* Importa a funcionalidad de usar a logica dos botoes quando presionados */
 
export default function App() {
    const [display, setDisplay] = useState("0"); /* NOTA: cosntantes que representam a logica do aplicativo deverao ser declaradas fora do return(), pois no return devera existir apenas codigo JSX, ouseja os componentes que renderizam o aplicativo */

    return (
        <View className="flex-1  bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Essa aqui é uma Calculadora
            </Text>

            {/* Componente texto que renderiza uma variable {Display} */}
            <Text>{display}</Text>

            {/* Um Botao Simples que contem um Title e uma Funcao Arrow Function ()=>{funcao} Declara que QUANDO PRESIONADO (onPress) devera ordenar a variable display ser 5 (setDisplay=("5") */}
            <Button
                title="BOTAO 1"
                onPress={() => {
                    setDisplay("1");
                }}
            />

            {/* Um Botao Simples que contem um Title e uma Funcao Arrow Function ()=>{funcao} Declara que QUANDO PRESIONADO (onPress) devera ordenar a variable display ser 8 (setDisplay=("8") */}
            <Button
                title="BOTAO 2"
                onPress={() => {
                    setDisplay("2");
                }}
            />

            <Button
                title="BOTAO 3"
                onPress={() => {
                    setDisplay("3");
                }}
            />

            <Button
                title="BOTAO 4"
                onPress={() => {
                    setDisplay("4");
                }}
            />

            <Button
                title="BOTAO 5"
                onPress={() => {
                    setDisplay("5");
                }}
            />


        </View>
    );
};
