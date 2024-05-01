import Button from '@/components/Common/Button'
import Card from '@/components/Common/Card'
import Input from '@/components/Common/Input'
import Header from '@/components/Containers/Header'
import Logo from '@/components/Images/logo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header>
        <Logo width="40" height="40" />
        <Input.Search placeholder="Search..." />
        <Button className={'ml-auto'} variant="default">
          DUC
        </Button>
      </Header>
      <div>
        <Card>
          <Logo width="40" height="40" />
          <Input.Search placeholder="Search..." />
          <Button className={'ml-auto'} variant="default">
            DUC
          </Button>
        </Card>
      </div>
    </main>
  )
}
