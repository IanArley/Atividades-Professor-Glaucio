AlturasMale = []
AlturasFemale = []
class Altura:
    def __init__(self, AlturasH, AlturasM):
        self.AlturaH = AlturasH
        self.AlturaM = AlturasM

    def CalculosHomens(AlrurasH):
        NumeroDeHomens = len(AlturasMale)
        MaiorAltura = max(AlturasMale)
        MenorAltura = min(AlturasMale)
        MediaHomens = sum(AlturasMale) / NumeroDeHomens  
        print(f"Nesta lista com {NumeroDeHomens} Homens:\nO homem mais alto tem: {MaiorAltura} metros;\nO homem mais baixo tem : {MenorAltura} metros;\nA média das alturas é: {MediaHomens}")

    def CalculosMulheres(AltrasM):
        NumeroDeMulheres = len(AlturasFemale)
        MaiorAltura = max(AlturasFemale)
        MenorAltura = min(AlturasFemale)
        MediaMulheres = sum(AlturasFemale) / NumeroDeMulheres    
        print(f"Nesta lista com {NumeroDeMulheres} mulheres:\nA mulher mais alta tem: {MaiorAltura} metros;\nA mulher mais baixa tem : {MenorAltura} metros;\nA média das alturas é: {MediaMulheres}")       
       
while True:
    Escolha = int(input("1. Homens\n2. Mulheres\n3. Encerrar programa\nDigite o número correspondente ao gênero que será utilizado ou digite 3 para encerrar o programa: "))
    if Escolha == 1:
        Homens = float(input("\nDigite a altura de um homem(a altura deve ser digitada usando um ponto ao invés da vírgula): "))
        AlturasMale.append(Homens)
        Escolha2 = int(input("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas(Necessário para obter as respostas)\n2. seguir para as respostas: "))    
        while Escolha2 == 1:
            Homens = float(input("Digite a altura de um homem: "))
            AlturasMale.append(Homens)
            Escolha2 = int(input("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas(Necessário para obter as respostas)\n2. seguir para as respostas: "))
        if Escolha2 == 2:
            altura = Altura(Homens, 0)
            altura.CalculosHomens()

    elif Escolha == 2:
        Mulheres = float(input("\nDigite a altura de uma mulher(a altura deve ser digitada usando um ponto ao invés da vírgula): "))
        AlturasFemale.append(Mulheres)
        Escolha2 = int(input("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas(Necessário para obter as respostas)\n2. seguir para as respostas: "))    
        while Escolha2 == 1:
            Mulheres = float(input("Digite a altura de uma mulher: "))
            AlturasFemale.append(Mulheres)
            Escolha2 = int(input("\nAgora escolha uma das opções a seguir:\n1. Digitar mais alturas(Necessário para obter as respostas)\n2. seguir para as respostas: "))
        if Escolha2 == 2:
            altura = Altura(0, Mulheres)
            altura.CalculosMulheres()

    elif Escolha == 3:
        print("Encerrando Programa...")
        break     

    else:
        print("Error!!! digite apenas números e/ou apenas os que o programa pede...\n\n")   