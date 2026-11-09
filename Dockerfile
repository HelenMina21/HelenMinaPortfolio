# =========================================
# BUILD STAGE
# =========================================

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY ["HelenMinaPortfolio.csproj", "./"]

RUN dotnet restore "HelenMinaPortfolio.csproj"

COPY . .

RUN dotnet publish "HelenMinaPortfolio.csproj" \
    -c Release \
    -o /app/publish \
    /p:UseAppHost=false


# =========================================
# RUNTIME STAGE
# =========================================

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "HelenMinaPortfolio.dll"]
