import { Card, CardHeader,CardTitle, CardDescription, CardContent } from "../ui/card";
import { CircleDollarSign, DollarSign } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";



export default function Sales() {

    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                       Últimos clientes

                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-174669.jpg?semt=ais_hybrid&w=740"/>
                        <AvatarFallback>PV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Paulo Victor</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">paulo@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-174669.jpg?semt=ais_hybrid&w=740"/>
                        <AvatarFallback>PV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Paulo Victor</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">paulo@gmail.com</span>
                    </div>
                </article>


                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-174669.jpg?semt=ais_hybrid&w=740"/>
                        <AvatarFallback>PV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Paulo Victor</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">paulo@gmail.com</span>
                    </div>
                </article>

            </CardContent>
        </Card>
    )
}