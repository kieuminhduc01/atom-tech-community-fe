import Input from '@/components/Common/Input'

export default function Enter() {
  return (
    <div className="bg-white w-screen h-screen p-4">
      <div className="mx-auto block box-border sm:w-[640px] px-12 py-6">
        <Input.Password />
        <Input />
      </div>
    </div>
  )
}
