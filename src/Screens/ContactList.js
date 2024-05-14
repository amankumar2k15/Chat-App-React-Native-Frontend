import React from 'react'
import { Dimensions, FlatList, Image, Text, View } from 'react-native'
import { contactData } from '../../data/Data'

const ContactList = () => {
    const deviceHeight = Dimensions.get('window').height;

    return (
        <View className="pt-4 flex gap-2">

            <FlatList style={{ height: deviceHeight - 150 }}
                data={contactData}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <View className="flex justify-between flex-row items-center px-2 py-2 border-b-[1px] border-[#F5F5F5]">
                        <View className="flex flex-row items-center gap-2">
                            <View>
                                <Image className="w-[52px] h-[52px]" source={item.img} />
                            </View>
                            <View>
                                <View>
                                    <Text className="text-black font-bold text-[18px]">{item.name}</Text>
                                    <Text className="text-slate-400 text-[14px]">last seen recently</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text className="text-orange-400">Message</Text>
                        </View>
                    </View>
                )}
            />

        </View>
    )
}

export default ContactList
