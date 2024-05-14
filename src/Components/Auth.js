import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Auth = ({ headingText, buttonText, bottomText, forgetPassword, login, register, screenName }) => {
    const navigation = useNavigation()

    return (
        <View className="flex-1">
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Image className="w-[400px] h-[812px] -z-10" source={require("../../assets/img/auth.jpg")} />
            </View>
            <View className="flex-1 justify-end items-center ">
                <View className="h-[500px] w-[400px] z-50 bg-white rounded-tl-[100px] flex py-10 items-center">
                    <Text className="text-[36px] font-bold text-[#FF9134]">{headingText}</Text>
                    <View className="relative mt-20 mb-[10px]">
                        <Image className="absolute z-20 left-5 top-[14px]" source={require("../../assets/img/mail.png")} />
                        <TextInput className="w-[300px] pl-[55px] py-3 bg-gray-200 rounded-[10px] "
                            // value={email}
                            // onChangeText={setEmail}
                            placeholder="alberto@mail.com"
                            keyboardType="email-address"
                        />
                    </View>
                    <View className="relative mb-[10px] mt-3">
                        <Image className="absolute z-20 left-5 top-[14px]" source={require("../../assets/img/lock.png")} />
                        <TextInput className="w-[300px]  pl-[55px] py-3 bg-gray-200 rounded-[10px]"
                            // value={password}
                            // onChangeText={setPassword}
                            placeholder="*********"
                            secureTextEntry={true}
                        />
                    </View>
                    {
                        forgetPassword && (
                            <View>
                                <Text className="text-[#FF9154]">Forget Password</Text>
                            </View>
                        )
                    }
                    <TouchableOpacity className="w-[300px]"
                        // onPress={handleSignUp}
                        style={{ backgroundColor: '#0099FF', backgroundColor: "#FF9134", padding: 15, borderRadius: 10, marginTop: 60 }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
                    <Text className="font-semibold mt-2">Do you have an account?
                        {screenName === "Login" &&
                            <Button className="text-[#FF9134] font-semibold"
                                title={bottomText}
                                onPress={() =>
                                    navigation.navigate("Register")
                                }
                            />
                        }
                        {register &&
                            <Button className="text-[#FF9134] font-semibold !bg-white"
                                title={bottomText}
                                onPress={() =>
                                    navigation.navigate("Login")
                                }
                            />
                        }
                        {login &&
                            <Button className="text-[#FF9134] font-semibold"
                                title={bottomText}
                                onPress={() =>
                                    navigation.navigate("Contact")
                                }
                            />
                        }
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default Auth
