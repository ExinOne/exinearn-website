import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, BarChart, Gift, Award, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%8F%E6%98%8E%E5%B8%A6%E5%AD%97%E6%A8%AA-cTbbXpijhsz9uxlJ0UT1jh0K2odtIC.png"
              alt="ExinEarn Logo"
              width={300}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              产品特点
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              如何使用
            </Link>
            <Link href="#platforms" className="text-sm font-medium hover:text-primary">
              支持平台
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              常见问题
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              登录
            </Button>
            <Button>立即注册</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ExinEarn <span className="text-primary">水龙头</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">购物获得额外奖励，积少成多收益丰</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  在淘宝、京东、拼多多等平台正常购物，通过 ExinEarn
                  水龙头获得额外奖励，不改变购物习惯，轻松累积可观收益。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    立即开始 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    了解更多
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0">
                <Image
                  alt="ExinEarn App Screenshot"
                  className="rounded-xl object-cover shadow-xl"
                  height={500}
                  src="/placeholder.svg?height=500&width=400"
                  width={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">产品特点</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ExinEarn 水龙头为您提供最优质的购物奖励体验
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">多平台支持</h3>
                <p className="text-center text-muted-foreground">
                  支持淘宝、京东、拼多多等多个主流购物平台，覆盖您的所有购物需求。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">持续奖励</h3>
                <p className="text-center text-muted-foreground">
                  每次购物都能获得额外奖励，长期使用积少成多，累积可观收益。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">数据透明</h3>
                <p className="text-center text-muted-foreground">订单跟踪实时可见，奖励金额清晰透明，让您放心购物。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">专属优惠</h3>
                <p className="text-center text-muted-foreground">独家优惠券和促销活动，为会员提供更多额外福利。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">安全保障</h3>
                <p className="text-center text-muted-foreground">严格的数据加密和隐私保护，确保您的账户和交易安全。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">长期收益</h3>
                <p className="text-center text-muted-foreground">
                  众多用户使用4-5年，累积奖励上万元，长期使用价值显著。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">如何使用</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  简单四步，轻松获取购物奖励
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">注册账号</h3>
                  <p className="text-center text-muted-foreground">免费注册 ExinEarn 水龙头账号，填写基本信息。</p>
                </div>
                <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-primary lg:block lg:w-1/2"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">浏览商品</h3>
                  <p className="text-center text-muted-foreground">通过 ExinEarn 水龙头进入您喜爱的购物平台。</p>
                </div>
                <div className="absolute left-0 right-0 top-6 hidden h-0.5 w-full bg-primary lg:block"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">正常购物</h3>
                  <p className="text-center text-muted-foreground">像平常一样购物，价格与直接购买完全相同。</p>
                </div>
                <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 bg-primary lg:block"></div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">4</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">获取奖励</h3>
                  <p className="text-center text-muted-foreground">订单确认后，额外奖励自动到账，可随时提现。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">支持平台</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  覆盖电商与生活服务平台，满足您的所有消费需求
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://img.alicdn.com/imgextra/i4/O1CN01EYFcn61UlbR7LMYyW_!!6000000002557-2-tps-160-160.png"
                    alt="淘宝"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">淘宝</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://storage.360buyimg.com/tjall/jfs/t1/97221/35/34747/6471/63e4823fF67dcf59e/99a95a057fce1958.png"
                    alt="京东"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">京东</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://cdn.pinduoduo.com/assets/favicon-2d27d1d4.ico"
                    alt="拼多多"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">拼多多</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://img.alicdn.com/imgextra/i3/O1CN01YbDKnC1vl2ue5KFnV_!!6000000006211-2-tps-160-160.png"
                    alt="天猫"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">天猫</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://www.heytea.com/storage/product/2020/05/27/0c88e67d69ac4b66b1a2d3b4c5e3f13f.jpg"
                    alt="喜茶"
                    width={80}
                    height={80}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold">喜茶</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://www.starbucks.com.cn/assets/icons/icon-384x384.png"
                    alt="星巴克"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">星巴克</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://www.luckincoffee.com/assets/images/icon-512x512.png"
                    alt="瑞幸"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">瑞幸</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://gw.alicdn.com/tfs/TB1tuPlaQ9l0K4jSZFKXXXFjpXa-195-195.png"
                    alt="饿了么"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">饿了么</h3>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-lg border p-4 shadow-sm hover:border-primary transition-colors">
                  <Image
                    src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d868c1f6/touch/img/logo.png"
                    alt="美团"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold">美团</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">用户评价</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  看看其他用户如何评价 ExinEarn 水龙头
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "使用水龙头已经5年了，不知不觉中累积了12000多元的奖励。最棒的是我不需要改变购物习惯，只是从水龙头进入购物平台，价格完全一样，但能获得额外奖励。"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    alt="User"
                    className="rounded-full"
                    height={40}
                    src="/placeholder.svg?height=40&width=40"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <p className="text-sm font-medium">张小姐</p>
                    <p className="text-xs text-muted-foreground">上海 | 使用5年</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "我是一个电商店主，经常需要大量采购。使用水龙头4年来，已经累积了超过15000元的奖励。这些都是正常采购之外的额外收入，对我的小生意帮助很大。"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    alt="User"
                    className="rounded-full"
                    height={40}
                    src="/placeholder.svg?height=40&width=40"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <p className="text-sm font-medium">李先生</p>
                    <p className="text-xs text-muted-foreground">北京 | 使用4年</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "最初只是抱着试试看的心态，没想到坚持使用3年多，已经累积了8000多元奖励。现在我所有的网购都会通过水龙头，有时还能找到平台没有的优惠券，真的很实用！"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    alt="User"
                    className="rounded-full"
                    height={40}
                    src="/placeholder.svg?height=40&width=40"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <p className="text-sm font-medium">王女士</p>
                    <p className="text-xs text-muted-foreground">广州 | 使用3年</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">常见问题</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  关于 ExinEarn 水龙头，您可能想知道的一切
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 mt-12">
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">ExinEarn 水龙头是如何运作的？</h3>
                <p className="mt-2 text-muted-foreground">
                  ExinEarn
                  水龙头与各大电商平台合作，当您通过我们的链接进行购物时，平台会给予我们一定的佣金，我们将大部分佣金以奖励的形式返还给您。价格与您直接在平台购买完全相同。
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">使用 ExinEarn 水龙头需要付费吗？</h3>
                <p className="mt-2 text-muted-foreground">
                  不需要。ExinEarn 水龙头完全免费使用，我们不收取任何会员费或服务费。
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">奖励什么时候到账？</h3>
                <p className="mt-2 text-muted-foreground">
                  一般情况下，订单确认收货的次月21号结算。不同平台的结算周期有所不同，具体以系统显示为准。
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm hover:border-primary transition-colors">
                <h3 className="text-lg font-bold">我邀请朋友能获得什么好处？</h3>
                <p className="mt-2 text-muted-foreground">
                  当您邀请朋友注册并使用 ExinEarn
                  水龙头，您将获得朋友订单奖励的额外分成。邀请越多，奖励越多，这是长期持续的额外收益来源。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">开始获取奖励</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即注册 ExinEarn 水龙头，享受购物奖励带来的额外收益
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-primary hover:bg-orange-50">
                  立即注册
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
                  了解更多
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 ExinEarn 水龙头. 保留所有权利。
            </p>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-muted-foreground hover:underline"
            >
              粤ICP备2020075053号-1
            </a>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              关于我们
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              隐私政策
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              使用条款
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              联系我们
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

