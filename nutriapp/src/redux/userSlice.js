import { createSlice,} from '@reduxjs/toolkit'

  const initialState = {
    name: 'Ruben',
    email: 'rubendam@gmail.com',
    user: 'ruben',
    password: 'dam',
    description: 'Una Persona que busca mejorar su alimentacion'
  };

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            const { name, email, user, password, description } = action.payload;
            state.name = name
            state.email = email
            state.user = user
            state.password = password
            state.description = description
        }, 
    }
})

export  const{setProfile} = userSlice.actions
export default userSlice.reducer