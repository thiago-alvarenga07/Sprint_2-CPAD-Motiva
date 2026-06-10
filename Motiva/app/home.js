import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function Home () {
    const router = useRouter();
    const { user, logout } = useAuth();

    return(
        <>
            <ScrollView style={styles.scroll}>
                <View style={styles.header}>
                    <Image source={require('../assets/motiva-logo-branca.png')} style={styles.logo}></Image>
                </View>
                <View style={styles.home}>

                </View>
        </ScrollView>
        <View style={styles.navigationContainer}>
            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.botaoNavigation} onPress={() => router.push()}>
                    <Ionicons name="map-outline" size={24} color="#000"/>
                    <Text style={styles.textoIcone}> Mapa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavigation} onPress={() => router.push()}>
                    <Ionicons name="radio-outline" size={24} color="#000"/>
                    <Text style={styles.textoIcone}>Sensores</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavigation}>
                    <View style={styles.iconeAtivo}>
                        <Ionicons name="home" size={24} color="#5E22F3"/>
                    </View>
                    <Text style={styles.textoIconeAtivo}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavigation} onPress={() => router.push()}>
                    <Ionicons name="notifications-outline" size={24} color="#000"/>
                    <Text style={styles.textoIcone}>Alertas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavigation} onPress={() => {logout(); router.push('/');}}>
                    <Ionicons name="log-out-outline" size={24} color="#000"/>
                    <Text style={styles.textoIcone}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    scroll:              { },
    header:              { backgroundColor: '#5E22F3', height: 100, alignItems: 'center', justifyContent: 'center', flex: 1},
    logo:                { height: 100, width: 200},
    home:                { },
    navigationContainer: { position: 'absolute', bottom: 15, left: 15, right: 15 },
    navigationBar:       { height: 75, backgroundColor: '#d0d0d0', borderRadius: 25, borderWidth: 1, borderColor: '#dfdfdf', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', elevation: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.3, shadowRadius: 6 },
    botaoNavigation:     { flex: 1, alignItems: 'center', justifyContent: 'center' },
    iconeAtivo:          { width: 42, height: 42, borderRadius: 21, backgroundColor: '#5d22f244', justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
    textoIcone:          { color: '#000', fontSize: 11, marginTop: 4,},
    textoIconeAtivo:     { color: '#5E22F3', fontSize: 11, fontWeight: 'bold',},
})