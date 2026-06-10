import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function login() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorUser, setErrorUser ] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const { auth } = useAuth();

    async function enteringSystem() {
        setErrorUser(false);
        setErrorPassword(false);
        const result = await auth(user, password);
        
        if (result === 'user' ) {
            setErrorUser(true);
        } else if (result === 'password') {
            setErrorPassword(true);
        } else {
            router.push('/home')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.login}>
                <Image source={require('../assets/motiva-logo-roxa.png')} style={styles.logo}></Image>
                <Text style={styles.subtitle}>Sistema de monitoramento rodoviário</Text>
                <Text style={styles.text}>Usuario</Text>
                <TextInput
                    placeholder='Digite seu usuario'
                    value={user}
                    onChangeText={setUser}
                    style={errorUser ? styles.userBoxError : styles.userBox}
                    placeholderTextColor={'#000'}
                />
                {errorUser ? <Text style={styles.errorText}>Usuário não encontrado!</Text> : null}
                <Text style={styles.text}>Senha</Text>
                <View style={styles.passwordInput}>
                    <TextInput
                        placeholder='Digite sua senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!visiblePassword}
                        style={errorPassword ? styles.passwordBoxError : styles.passwordBox}
                        placeholderTextColor={'#000'}
                    />
                    <TouchableOpacity onPress={() => setVisiblePassword(!visiblePassword)} style={styles.passwordEye}>
                        <Ionicons name={visiblePassword ? 'eye-off' : 'eye'} size={24} color='#000' />
                    </TouchableOpacity>
                </View>
                {errorPassword ? <Text style={styles.errorText}>Senha incorreta!</Text> : null}
                <TouchableOpacity onPress={enteringSystem} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:        { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5E22F3' },
    login:            { alignItems: 'center', backgroundColor: '#d0d0d0', width: '90%', maxWidth: 380, paddingVertical: 35, borderRadius: 30, borderWidth: 1, borderColor: '#dfdfdf'},
    logo:             { width: 150, height: 150 },
    subtitle:         { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 20, marginBottom: 60},
    text:             { fontSize: 16, fontWeight: 'bold', color: '#5E22F3', alignSelf: 'flex-start', marginLeft: '12%', marginBottom: 3, },
    userBox:          { width: '80%', paddingHorizontal: 15, borderWidth: 1, borderColor: '#dfdfdf', borderRadius: 15, backgroundColor: '#bbb', marginBottom: 15},
    userBoxError:     { width: '80%', paddingHorizontal: 15, borderWidth: 1, borderColor: '#EF4444', borderRadius: 15, backgroundColor: '#bbb'},
    passwordBox:      { width: '100%', borderWidth: 1, paddingHorizontal: 15, borderColor: '#dfdfdf', borderRadius: 15, backgroundColor: '#bbb', marginBottom: 15},
    passwordBoxError: { width: '100%', borderWidth: 1, paddingHorizontal: 15, borderColor: '#EF4444', borderRadius: 15, backgroundColor: '#bbb'},
    buttonText:       { fontSize: 20, color: '#fff', fontWeight: 'bold'},
    button:           { backgroundColor: '#5E22F3', width: '60%', marginTop: 30, height: 55, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    passwordInput:    { width: '80%'},
    passwordEye:      { position: 'absolute', right: 10, top: 8},
    errorText:        { color: '#EF4444', fontSize: 15, marginLeft: '12%', alignSelf: 'flex-start', fontWeight: 'bold', marginBottom: 5 },
})