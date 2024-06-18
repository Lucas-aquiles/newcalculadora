import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import CalculatorBottom from '../components/CalculatorBottom';
import useCalculatorButton from '../hooks/useCalculatorButton';

const CalculatorScreen = () => {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult
  } = useCalculatorButton();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        {
          (formula === prevNumber )
          ?<Text style={styles.subResult}> </Text>
          :(<Text  adjustsFontSizeToFit numberOfLines={1}
           style={styles.subResult}> {prevNumber}
          </Text>
        )
        }
      </View>

      <View style={styles.row}>
        <CalculatorBottom
          onPress={clean}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorBottom
          onPress={toggleSign}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorBottom
          onPress={deleteOperation}
          label="del"
          color={colors.lightGray}
          blackText
        />
        <CalculatorBottom
          onPress={divideOperation}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBottom onPress={() => buildNumber('7')} label="7" />
        <CalculatorBottom onPress={() => buildNumber('8')} label="8" />
        <CalculatorBottom onPress={() => buildNumber('9')} label="9" />
        <CalculatorBottom
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBottom onPress={() => buildNumber('4')} label="4" />
        <CalculatorBottom onPress={() => buildNumber('5')} label="5" />
        <CalculatorBottom onPress={() => buildNumber('6')} label="6" />
        <CalculatorBottom
          onPress={substractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBottom onPress={() => buildNumber('1')} label="1" />
        <CalculatorBottom onPress={() => buildNumber('2')} label="2" />
        <CalculatorBottom onPress={() => buildNumber('3')} label="3" />
        <CalculatorBottom
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorBottom
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorBottom onPress={() => buildNumber('.')} label="." />
        <CalculatorBottom
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
