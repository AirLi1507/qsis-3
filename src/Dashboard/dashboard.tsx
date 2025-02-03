import { Box, Button, Card, Flex, TabNav, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
// import Logo from "../Branding/logo";

const Dashboard = () => {
  return (
    <>
      <Theme accentColor="blue">
        <Flex direction={"row"}>
          <nav className={`
            w-[300px]
            h-svh
            bg-zinc-50
            border-r-1
            border-r-zinc-200
          `}>
            <Flex direction={'column'} pt={'8'} align={'center'}>
              {/* <Logo logoSize={36}/> */}
              <Text className="text-blue-800" mt={'5'} weight={'bold'} size={'8'}>QSIS 3</Text>
              <TabNav.Root>
                <TabNav.Link>e</TabNav.Link>
              </TabNav.Root>
            </Flex>
          </nav>
          <main className="p-5">
            <Box minWidth={"320px"}>
              <Card>
                <Flex direction={"column"} gap={"2"}>
                  <Text>A regular card in er Radix UI</Text>
                  <Button onClick={()=>{console.log('why u clicked the button')}}>Button</Button>
                </Flex>
              </Card>
            </Box>
          </main>
        </Flex>
      </Theme>
    </>
  )
}

export default Dashboard