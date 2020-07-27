import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import CustomNumericImput from '../CustomNumericImput';

import styles from './styles';

export default function index({
  max,
  modalVisible,
  setModalVisible,
  howManySelectedQuestions,
  setHowManySelectedQuestions,
}) {
  const handleConfirmButton = () => {
    if (howManySelectedQuestions < 1) {
      setHowManySelectedQuestions(1);
    }
    if (howManySelectedQuestions > max) {
      setHowManySelectedQuestions(max);
    }

    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Escolha o número de questões: (Máximo {max}.)
            </Text>

            <CustomNumericImput
              value={howManySelectedQuestions}
              onChange={(value) => {
                setHowManySelectedQuestions(value);
              }}
              minValue={1}
              maxValue={max}
              totalWidth={240}
              totalHeight={50}
              iconSize={25}
              step={1}
              valueType="integer"
              textColor="#4DA5E0"
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor="#2ECC71"
              leftButtonBackgroundColor="#E84C3D"
            />

            <TouchableOpacity
              style={{
                ...styles.openButton,
                backgroundColor: '#2ECC71',
                marginTop: 30,
              }}
              onPress={handleConfirmButton}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
