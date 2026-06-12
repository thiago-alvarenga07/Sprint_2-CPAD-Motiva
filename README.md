# 🌱 GRAMA (Gerenciamento Remoto e Autônomo de Monitoramento Ambiental)
> Integrantes:
* Thiago Sobral de Alvarenga RM: 562695
* Pedro Miranda Campos Riato RM: 562117
* Israel Karacsony de Camargo Nunes RM: 563435
* Diego Antonio Silva Mendes RM: 565509
* Giovanni de Lela Anjos Costa RM: 563066
* Gabriel Hiro Nakamura RM: 562221
---

## 🤔Problema
Atualmente a CCR Motiva, possui um sistema totalmente manual para analisar o tamanho da grama dos acostamentos de suas rodovias, em que funcionários apenas visualisando anotam se o tamanho está ideal ou não,
isso causa irregularidade e baixa precisão dos dados que são obtidos.

---
## 🎯Solução
Com essas informações tivemos a ideia de criar um aplicativo para os funcionários que serão responsáveis por realizar o corte da grama, para analisar os lugares que precisam do corte utilizaremos um sensor LiDAR 
que enviará os dados da grama para o aplicativo. No app o funcionário poderá gerenciar os sensores receber alertas de dispositivos que detectaram altura crítica da grama, gerenciar quantos trechos precisam de 
atenção.

---
## 📦 Mocks utilizados
- Arquivo `sensorsData.js` cria dados de sensores mockados para simulação dos dados
- Arquivo `map.js` possui uma imagem e um textInput para representar API de GPS que será implementada futuramente
- Arquivo `home.js` possui uma funcionalidade para simular o corte da grama

---
## ▶️ Como Executar

- Node.js já instalado
- Expo CLI: `npm install -g expo-cli`
- Expo Go instalado no celular

### Instalação
git clone https://github.com/thiago-alvarenga07/Sprint_2-CPAD-Motiva
### Acesse a página do projeto
cd Motiva
### Instale as dependências
npm install
### Inicie o Projeto
npx expo start

Escaneie o QR Code com o Expo Go para rodar no dispositivo físico

---
## 📸 Telas do Aplicativo
<img width="270" height="600" alt="login" src="https://github.com/user-attachments/assets/d8fa38dc-b97e-4f85-95cd-fa205d33a2e9" />
<img width="270" height="600" alt="home" src="https://github.com/user-attachments/assets/4390e086-6a1d-48f0-adda-e3c4e6438136" />
<img width="270" height="600" alt="alertas" src="https://github.com/user-attachments/assets/f7acfe0b-435d-4fc5-af29-e630fa15cd51" />
<img width="270" height="600" alt="sensores" src="https://github.com/user-attachments/assets/301e94ea-f1c9-43b3-bd06-effee1874b18" />
<img width="270" height="600" alt="gps" src="https://github.com/user-attachments/assets/a6c921cf-8316-450d-a98d-6b347a919adb" />

---
## 📹 Vídeo demonstrativo
https://youtu.be/kFMFcyBH9xw
