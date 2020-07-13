const initialState = [
  {
    id: 1, 
    en: 'accomodation',
    translation: 'жильё',
    translated: false,
    transcription: 'əˌkɒm.əˈdeɪ.ʃən', 
    allowedTrainingTypes: ['WriteWord', 'WordConstructor', 'ChooseWord'],
    passedTrainingsCount: 0,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Mc97nEmT8Ixt29d8zrzqMcxk4qXAL9Y66A&usqp=CAU',
  },
  {id: 2, word: 'Помыть посуду' }
  
]
const words = (state = initialState, action) => { 
  return state;
} 


export default words