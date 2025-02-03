import { Box, Button, Card, Code, Flex, TabNav, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Logo from "../Branding/logo";

const Dashboard = () => {
  return (
    <>
      <Theme accentColor="blue">
        <nav className={`
          w-[300px]
          h-svh
          bg-zinc-50
          border-r-1
          border-r-zinc-200
        `}>
          <Flex direction={'column'} pt={'8'} align={'center'}>
            <Logo logoSize={36}/>
            <Text className="text-blue-800" mt={'5'} weight={'bold'} size={'8'}>QSIS 3</Text>
            <TabNav.Root>
              <TabNav.Link>e</TabNav.Link>
            </TabNav.Root>
          </Flex>
        </nav>
      </Theme>
    </>
  )
}

export default Dashboard