import "../../global.css"
import {Button, Text, View} from "react-native"; /* Importa COMPONENTES utilizados neste arquivo */
import {useState} from "react"; /* Importa a funcionalidad de usar a logica dos botoes quando presionados */
 
export default function App() {
    const [display, setDisplay] = useState("0"); /* NOTA: cosntantes que representam a logica do aplicativo deverao ser declaradas fora do return(), pois no return devera existir apenas codigo JSX, ouseja os componentes que renderizam o aplicativo */

    /* Logica do Calculo
    1. Encontrar a posicao do operador
    2. Extrair o primeiro numero
    3. Extrair o seundo numero
    4. Identificar qual oepracao executar
    */

    const calcular = () => {
        const PrimeiroNum = Number(display.slice(0, display.indexOf("+")));
        const SegundoNum = Number(display.slice(display.indexOf("+"+1)));
        const ResultadoDaOperacao = PrimeiroNum+SegundoNum;
        setDisplay(String(ResultadoDaOperacao));
    };


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
                    setDisplay(display+"1");
                }}
            />

            {/* Um Botao Simples que contem um Title e uma Funcao Arrow Function ()=>{funcao} Declara que QUANDO PRESIONADO (onPress) devera ordenar a variable display ser 8 (setDisplay=("8") */}
            <Button
                title="BOTAO 2"
                onPress={() => {
                    setDisplay(display+"2");
                }}
            />

            <Button
                title="BOTAO 3"
                onPress={() => {
                    setDisplay(display+"3");
                }}
            />

            <Button
                title="BOTAO 4"
                onPress={() => {
                    setDisplay(display+"4");
                }}
            />

            <Button
                title="BOTAO 5"
                onPress={() => {
                    setDisplay(display+"5");
                }}
            />

            <Button
                title="BOTAO Soma"
                onPress={() => {
                    setDisplay(display+"+");
                }}
            />

            <Button
                title="BOTAO Resta"
                onPress={() => {
                    setDisplay(display+"-");
                }}
            />


            <Button
                title="Limpar Display"
                onPress={() => {
                    setDisplay("0");
                }}
            />

            <Button
                title="Calcular"
                onPress={() => {
                    calcular();
                }}
            />


        </View>
    );
};
