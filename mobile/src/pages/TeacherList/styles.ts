import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f7',
    flex: 1
  },
  scrollTeacherList: {
    marginTop: -40
  },
  searchForm: {
    marginBottom: 24
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 4,
    paddingHorizontal: 16
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBlock: {
    width: '48%'
  },
  btnSubmit: {
    alignItems: 'center',
    backgroundColor: '#04d361',
    borderRadius: 8,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center'
  },
  txtBtnSubmit: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  }
})

export default styles
