import { Tabs } from "expo-router";
import { StyleSheet, View, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function TabsBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={24} style={{ color: '#1BC464' }} {...props} />;
}

const TabsLayout = () => {
    return (
        <View style={style.container}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#1BC464',
                    tabBarInactiveTintColor: "gray",
                    tabBarLabelStyle: Platform.select({
                        ios: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            paddingTop: 10,
                        },
                        android: {
                            paddingTop: 1, // Giảm padding để phù hợp với Android
                        },
                    }),
                    headerShown: false,// ẩn header mặc định của stack
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "shop",
                        tabBarIcon: (props) => (
                            <TabsBarIcon name="shopping-cart" {...props} /> // ...props truyền tất cả các thuộc tính của props vào
                        ),
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{
                        title: "orders",
                        tabBarIcon: (props) => (
                            <TabsBarIcon name="book" {...props} />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
};

export default TabsLayout;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 25 : 0, // Thêm padding cho Android để tránh tràn vào status bar
    },
});