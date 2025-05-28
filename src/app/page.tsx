import { Card, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>
                Total vendas
              </CardTitle>
            </div>
          </CardHeader>
        </Card>


      </section>
    </main>
  );
}
